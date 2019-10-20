if (window.innerWidth > 800) {
  swinch.init(null, {
    /**
     * The duration of the snap, in milliseconds
     *
     * @type {Number}
     */
    duration: 300,

    /**
     * The offset of the snapping target
     *
     * @type {Number}
     */
    offset: 0,

    /**
     * Force ScrollControl to snap on a part of each section.
     *
     * null     Snap to the bottom of each section if going up & top if going down.
     * 'top'    Force snap to the top of each section
     * 'bottom' Force snap to the bottom of each section
     *
     * @type {string|null}
     */
    snapTo: null,

    /**
     * Called before the snapping starts
     *
     * @param  {Node}   currentSection
     * @param  {Node}   nextSection
     * @param  {Object} scrollDirection {isUp: <boolean>, isDown: <boolean>}
     *
     * @return {void}
     */
    onBeforeSnap: function onBeforeSnap(currentSection, nextSection, scrollDirection) {
      //
    },

    /**
     * Called after the snapping completes
     *
     * @param  {Node}   currentSection
     * @param  {Node}   previousSection
     * @param  {Object} scrollDirection {isUp: <boolean>, isDown: <boolean>}
     *
     * @return {void}
     */
    onSnapped: function onSnapped(currentSection, previousSection, scrollDirection) {
      //
    },
  });
}
