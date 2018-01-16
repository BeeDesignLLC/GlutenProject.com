// @flow
import {createElement as h} from 'react'
import styled from 'styled-components'

export const withDynamicTag = (Component: Object) => {
  const bucket = Object.create(null)

  const DynamicTag = (props: any) => {
    const {tag} = props

    if (typeof tag !== 'string' || !styled.hasOwnProperty(tag)) {
      return h(Component, props)
    }

    if (bucket[tag] === undefined) {
      bucket[tag] = Component.withComponent(tag)
    }

    return h(bucket[tag], props)
  }

  const name = Component.displayName || Component.constructor.name

  if (name) {
    DynamicTag.displayName = `DynamicTag(${name})`
  }

  return DynamicTag
}
