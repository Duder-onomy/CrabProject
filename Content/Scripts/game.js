/// <reference path="typings/ue.d.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

function main() {
  let actor = new TextRenderActor(GWorld, // world{World}
    {
      X:100, // location{Vector}
      Z:100,
    },
    {
      Yaw:180, // rotation{Rotator}
    }
  );

  actor.TextRender.SetHorizontalAlignment('EHTA_Center');
  actor.TextRender.SetText('Hello World');

  // CLEANUP
  return function () {
    actor.DestroyActor()
  }
}

// bootstrap to initiate live-reloading dev env.
try {
  module.exports = () => {
    let cleanup = null

    // wait for map to be loaded.
    process.nextTick(() => cleanup = main());

    // live-reloadable function should return its cleanup function
    return () => cleanup()
  }
}
catch (e) {
  require('bootstrap')('game')
}
