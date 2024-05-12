#!/usr/bin/env bun
import {$} from "bun"
import * as path from "path"

const root = path.resolve(__dirname, "../")
process.chdir(root)

const bucket = Bun.env.BUCKET_NAME
console.log(`uploading to ${bucket}...`)
await $`gsutil cp out/* gs://${bucket}`