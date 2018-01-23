render: function() {
  var text = this.state.watched ? 'Watched' : 'Unwatched';
  return (
    React.DOM.button(
      {onclick:this.handleClick},
      text
    )
  )
}
