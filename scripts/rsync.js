#!/usr/bin/env bun
import {$} from "bun"
import * as path from "node:path"

const root = path.resolve(__dirname, "../")
process.chdir(root)

const bucket = Bun.env.BUCKET_NAME
await $`gsutil rsync out gs://${bucket}`