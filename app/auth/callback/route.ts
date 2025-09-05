import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createClient();

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error || !session?.user) {
    return NextResponse.redirect(
      new URL("/auth/error", process.env.NEXT_PUBLIC_APP_URL)
    );
  }

  const user = session.user;

  await supabase.from("users").upsert(
    {
      google_id: user.id,
      name: user.user_metadata.full_name,
      profile_pic: user.user_metadata.avatar_url,
      role: "student",
      created_at: new Date().toISOString(),
    },
    { onConflict: "google_id" }
  );

  return NextResponse.redirect(
    new URL("/protected", process.env.NEXT_PUBLIC_APP_URL)
  );
}
