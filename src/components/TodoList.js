import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {
            items,
            updateTodosToShow,
            handleDelete,
            handleEdit,
            handleDoneTask
        } = this.props

        return (
            <Fragment>
                <h3 className="text-center">
                </h3>

                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                    </div>
                </div>

                {
                items.length === 0 ? '' :
                    <ul className="list-group my-5">
                        {
                            items.map(item => {
                                return (
                                    <TodoItem
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        completed={item.completed}
                                        handleDelete={() => handleDelete(item.id)}
                                        handleEdit={() => handleEdit(item.id)}
                                        handleDoneTask={handleDoneTask}
                                    />
                                )
                            })
                        }

                        <div className="row mt-4">
                            <div className="col-md-6">
                            </div>
                        </div>
                    </ul>
                }
            </Fragment>
        )
    }
}
