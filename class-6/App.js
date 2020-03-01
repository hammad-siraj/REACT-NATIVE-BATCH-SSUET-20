import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'hammad',
      data: null,
      user: 'new user',
    };
    console.log('constructor');
  }

  // componentWillMount() {
  //   console.log('component will mount');
  // }

  componentDidMount() {
    console.log('component did mount');

    // fetch().then(res=>{
    //   console.log(res)
    //   return res
    // }).then((res)={ return res.json()}).then(()=>{
    //   this.setState({
    //     name:res.name,

    //   })
    // })

    setTimeout(() => {
      this.setState({
        data: 'data fetch sucessfully',
        user: 'new user',
        stop: false,
      });
    }, 3000);
  }

  render() {
    let {data, name, user} = this.state;
    console.log('render');
    // this.setState({name:"xyz"}) dont do this in render
    return (
      <View>
        <Text> textInComponent </Text>
        {data ? <Text>{data}</Text> : <Text>Loading....</Text>}
        <UserList user={user} />

        {this.state.stop ? <Text>Timer stop</Text> : <Timer />}
        <Button
          title="STOP TIMER"
          onPress={() => {
            this.setState({stop: true});
          }}
        />
      </View>
    );
  }
}

export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
    };
  }
  componentDidUpdate(nextProps) {
    console.log('component did update', nextProps);
    if (this.props.user !== nextProps.user) {
      this.setState({
        update: true,
      });
    }
  }

  render() {
    let {update} = this.state;
    return (
      <>
        <Text>component {update ? 'update' : 'not update'}</Text>
        <Text>USER 1</Text>
        <Text>USER 2</Text>
        <Text>USER 3</Text>
        <Text>{this.props.user}</Text>
      </>
    );
  }
}

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({timer: this.state.timer + 1});
    }, 1000);
  }

  render() {
    return <Text>{this.state.timer}</Text>;
  }
}
