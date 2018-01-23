render: function() {
  var text = this.state.watched ? 'Watched' : 'Unwatched';
  return (
    <button onclick={this.handleClick}>
      {text}
    </button>
  );
}
