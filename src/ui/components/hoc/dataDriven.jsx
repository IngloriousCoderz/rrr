import React, { Component } from 'react'

const dataDriven = url => Enhanced => {
  class DataDriven extends Component {
    state = {
      dirty: false,
      data: []
    }

    setDirty = () => {
      this.setState(prevState => ({ dirty: true }))
    }

    fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      this.setState(prevState => ({ data, dirty: false }))
    }

    addItem = async body => {
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      this.setDirty()
    }

    replaceItem = async (id, body) => {
      await fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      this.setDirty()
    }

    updateItem = async (id, body) => {
      await fetch(`${url}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      this.setDirty()
    }

    removeItem = async id => {
      await fetch(`${url}/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      })
      this.setDirty()
    }

    clearData = async () => {
      await fetch(url, {
        method: 'DELETE',
        credentials: 'include'
      })
      this.setDirty()
    }

    componentDidMount() {
      this.setDirty()
    }

    componentDidUpdate(prevProps, prevState) {
      const { dirty } = this.state
      if (dirty) {
        this.fetchData()
      }
    }

    render() {
      return (
        <Enhanced
          {...this.props}
          data={this.state.data}
          addItem={this.addItem}
          replaceItem={this.replaceItem}
          updateItem={this.updateItem}
          removeItem={this.removeItem}
          clearData={this.clearData}
        />
      )
    }
  }

  return DataDriven
}

export default dataDriven
