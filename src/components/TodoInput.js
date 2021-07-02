import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Add a Task..."
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
