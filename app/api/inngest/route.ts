import {inngest} from "@/lib/inngest/client";
import {serve} from "inngest/next";
import {sendSignUpEmail} from "@/lib/inngest/functions";

export const {GET,POST,PUT} =serve({
    client:inngest,
    functions:[sendSignUpEmail]
})