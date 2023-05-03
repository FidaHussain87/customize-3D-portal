import React, { useRef } from 'react'

import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import state from '../store'
const CameraRig = ({ children }) => {
  const group = useRef()
  const snap = useSnapshot(state)

  //setting up model rotation smoothly///
  useFrame((state, delta) => {
    const isBreakPoint = window.innerHeight <= 1260
    const isMobile = window.innerHeight <= 600

    ///setting up initial positon of model/
    let targetPosition = [-0.4, 0.2]
    if (snap.intro) {
      if (isBreakPoint) targetPosition = [0, 0, 2]

      if (isMobile) targetPosition = [0, 0.2, 2.5]
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5]
      else targetPosition = [0, 0, 2]
    }
    //setting up model camera////
    easing.damp3(state.camera.position, targetPosition, 0.25, delta)
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta,
    )
  })

  return <group ref={group}>{children}</group>
}

export default CameraRig