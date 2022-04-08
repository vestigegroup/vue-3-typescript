import type { Component } from 'vue'
type RouteMeta = {
  requiresAuth?: boolean
  title?: string
  layout?: string
}
export interface Route {
  path: string
  name: string
  component: Component
  meta?: RouteMeta
}
