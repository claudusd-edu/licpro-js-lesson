class Example3_3 extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {color: 'green'};
  }

  changeColor(color) {
    this.setState({color: color});
  }

  render() {
    const style = { color: this.state.color };
    return (
      <div>
        <p style={style}>{ this.props.text}</p>
        <button onClick={() => this.changeColor('blue')}>bleu</button>
        <button onClick={() => this.changeColor('red')}>rouge</button>
      </div>
    )
  }
}
