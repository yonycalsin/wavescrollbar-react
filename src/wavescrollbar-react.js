import React, { Component } from 'react'
import Wavescrollbar from 'wavescrollbar'
import "wavescrollbar/dist/css/wavescrollbar.css"

class WavescrollbarReact extends Component {
   state = {
      wavescrollbarReact: null
   }
   componentDidMount() {
      var a = new Wavescrollbar("#wavescrollbar-react")
      this.setState({
         wavescrollbarReact: a
      })

      // Animation function
      if (this.props.setAnimation) {
         a.setAnimation()
      }

      // Container Background function
      if (this.props.setContainerBackground) {
         if (this.props.setContainerBackground === true) {
            a.setContainerBackground()
         } else {
            a.setContainerBackground(this.props.setContainerBackground)
         }
      }

      // Gradient function
      if (this.props.setGradient) {
         if (this.props.setGradient === true) {
            a.setGradient()
         } else {
            a.setGradient(this.props.setGradient)
         }
      }

      // Background function
      if (this.props.setBackground) {
         if (this.props.setBackground === true) {
            a.setBackground()
         } else {
            a.setBackground(this.props.setBackground)
         }
      }

      // Transition function
      if (this.props.setTransition) {
         if (this.props.setTransition === true) {
            a.setTransition()
         } else {
            a.setTransition(this.props.setTransition)
         }
      }

      // Height function
      if (this.props.setHeight) {
         if (this.props.setHeight === true) {
            a.setHeight()
         } else {
            a.setHeight(this.props.setHeight)
         }
      }
   }
   render() {
      return (
         <div id="wavescrollbar-react"></div>
      )
   }
}

export default WavescrollbarReact