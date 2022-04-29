import React, { Component } from 'react'

class LifeCycleB extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'Toshnav'
         }
         console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
 
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate ')
        
    render() {
      console.log('LifeCycleB Render')
    return <div> LifeCycleB </div>
  }
}

export default LifeCycleB