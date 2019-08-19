import modelHelper from './helper'

export default (knex) => {
  const helper = modelHelper({
    knex,
    name: 'User',
    tableName: 'users',
    selectableProps: [
      'uuid',
      'firstname',
      'lastname',
      'email',
      'updated_at',
      'created_at'
    ]
  })

  const create = props => helper.create(props)

  return {
    ...helper,
    create
  }
}
