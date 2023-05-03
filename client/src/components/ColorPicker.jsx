import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { SketchPicker } from 'react-color'
const ColorPicker = () => {
  const snap = useSnapshot(state)

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={['#ffffff', '#f81234', '#00ff00', '#0000ff', '#76a731']}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  )
}

export default ColorPicker
