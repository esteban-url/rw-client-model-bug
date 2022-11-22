import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const controls: QueryResolvers['controls'] = () => {
  return db.control.findMany()
}

export const control: QueryResolvers['control'] = ({ id }) => {
  return db.control.findUnique({
    where: { id },
  })
}

export const createControl: MutationResolvers['createControl'] = ({
  input,
}) => {
  return db.control.create({
    data: input,
  })
}

export const updateControl: MutationResolvers['updateControl'] = ({
  id,
  input,
}) => {
  return db.control.update({
    data: input,
    where: { id },
  })
}

export const deleteControl: MutationResolvers['deleteControl'] = ({ id }) => {
  return db.control.delete({
    where: { id },
  })
}
