"use server";

import database from "@/lib/supabase/server";

async function register() {
  const data = await database.from("users").select();
  console.log(data);
}

export default register;
