import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'Toshnav'
         }
         console.log('LifecycleA constructor')
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
        
    }

    render() {
      console.log('LifeCycleA Render')
        return (
            <div>
                <div>LifeCycleA</div>
                <LifeCycleB/>
            </div>
        )
  }
}

export default LifeCycleA