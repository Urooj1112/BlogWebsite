'use client'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { apiVersion, dataset, projectId } from '@/app/sanity/env'
import { schema } from '@/app/sanity/schemaTypes'
import { structure } from '@/app/sanity/structure'
export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
