# ReactNativeExample

<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/wallpaper.png" />

React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Weband UWP by enabling developers to use React along with native platform capabilities.

In 2012 Mark Zuckerberg commented, "The biggest mistake we made as a company was betting too much on HTML as opposed to native". He promised that Facebook would soon deliver a better mobile experience.

Inside Facebook, Jordan Walke found a way to generate UI elements for iOS from a background JavaScript thread. They decided to organise an internal Hackathon to perfect this prototype in order to be able to build native apps with this technology.

After months of development, Facebook released the first version for the React JavaScript Configuration in 2015. During a technical talk, Christopher Chedeau explained that Facebook was already using React Native in production for their Group App and their Ads Manager App.

The working principles of React Native are virtually identical to React except that React Native does not manipulate the DOM via the Virtual DOM. It runs in a background process (which interprets the JavaScript written by the developers) directly on the end-device and communicates with the native platform via a serialisation, asynchronous and batched Bridge.

React components wrap existing native code and interact with native APIs via React’s declarative UI paradigm and JavaScript. This enables native app development for whole new teams of developers, and can let existing native teams work much faster.

React Native does not use HTML or CSS. Instead, messages from the JavaScript thread are used to manipulate native views. React Native also allows developers to write native code in languages such as Java for Android and Objective-C or Swift for iOS which make it even more flexible.


## Home
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/home.png" />

### What's going on here?
Some of the things in here might not look like JavaScript to you. Don't panic. This is the future.

First of all, ES2015 (also known as ES6) is a set of improvements to JavaScript that is now part of the official standard, but not yet supported by all browsers, so often it isn't used yet in web development. React Native ships with ES2015 support, so you can use this stuff without worrying about compatibility. import, from, class, and extends in the example above are all ES2015 features. If you aren't familiar with ES2015, you can probably pick it up by reading through sample code like this tutorial has. If you want, this page has a good overview of ES2015 features.

The other unusual thing in this code example is <View><Text>Hello world!</Text></View>. This is JSX - a syntax for embedding XML within JavaScript. Many frameworks use a specialized templating language which lets you embed code inside markup language. In React, this is reversed. JSX lets you write your markup language inside code. It looks like HTML on the web, except instead of web things like <div> or <span>, you use React components. In this case, <Text> is a built-in component that displays some text and View is like the <div> or <span>.

### Components
So this code is defining HelloWorldApp, a new Component. When you're building a React Native app, you'll be making new components a lot. Anything you see on the screen is some sort of component. A component can be pretty basic - the only thing that's required is a render function which returns some JSX to render.

### DrawerLayoutAndroid
React component that wraps the platform DrawerLayout (Android only). The Drawer (typically used for navigation) is rendered with renderNavigationView and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the drawerPosition prop and its width can be set by the drawerWidth prop.

## Slide Menu
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/slideMenu.jpg"  width="300px" height="500px"/>
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/slideMenuSort.jpg"  width="300px" height="500px" />

# Images
### Static Image Resources
React Native provides a unified way of managing images and other media assets in your Android and iOS apps. To add a static image to your app, place it somewhere in your source code tree and reference it like this:

_<Image source={require('./my-icon.png')} />_

The image name is resolved the same way JS modules are resolved. In the example above, the packager will look for my-icon.png in the same folder as the component that requires it. Also, if you have my-icon.ios.png and my-icon.android.png, the packager will pick the correct file for the platform.

## Image View
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/imageView.png" width="300px" height="500px" />

# Animations
Animations are very important to create a great user experience. Stationary objects must overcome inertia as they start moving. Objects in motion have momentum and rarely come to a stop immediately. Animations allow you to convey physically believable motion in your interface.

React Native provides two complementary animation systems: Animated for granular and interactive control of specific values, and LayoutAnimation for animated global layout transactions.

## Animated API
The Animated API is designed to concisely express a wide variety of interesting animation and interaction patterns in a very performant way. Animated focuses on declarative relationships between inputs and outputs, with configurable transforms in between, and start/stop methods to control time-based animation execution.

Animated exports six animatable component types: View, Text, Image, ScrollView, FlatList and SectionList, but you can also create your own using Animated.createAnimatedComponent().

For example, a container view that fades in when it is mounted may look like this:


Let's break down what's happening here. In the FadeInView constructor, a new Animated.Value called fadeAnim is initialized as part of state. The opacity property on the View is mapped to this animated value. Behind the scenes, the numeric value is extracted and used to set opacity.

When the component mounts, the opacity is set to 0. Then, an easing animation is started on the fadeAnim animated value, which will update all of its dependent mappings (in this case, only the opacity) on each frame as the value animates to the final value of 1.

This is done in an optimized way that is faster than calling setState and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread.

## Configuring animations
Animations are heavily configurable. Custom and predefined easing functions, delays, durations, decay factors, spring constants, and more can all be tweaked depending on the type of animation.

Animated provides several animation types, the most commonly used one being Animated.timing(). It supports animating a value over time using one of various predefined easing functions, or you can use your own. Easing functions are typically used in animation to convey gradual acceleration and deceleration of objects.

By default, timing will use a easeInOut curve that conveys gradual acceleration to full speed and concludes by gradually decelerating to a stop. You can specify a different easing function by passing a easing parameter. Custom duration or even a delay before the animation starts is also supported.

For example, if we want to create a 2-second long animation of an object that slightly backs up before moving to its final position:

Animated.timing(this.state.xPosition, {
  toValue: 100,
  easing: Easing.back(),
  duration: 2000,
}).start();
Take a look at the Configuring animations section of the Animated API reference to learn more about all the config parameters supported by the built-in animations.

## Composing animations
Animations can be combined and played in sequence or in parallel. Sequential animations can play immediately after the previous animation has finished, or they can start after a specified delay. The Animated API provides several methods, such as sequence() and delay(), each of which take an array of animations to execute and automatically calls start()/stop() as needed.

**For example, the following animation coasts to a stop, then it springs back while twirling in parallel:**

Animated.sequence([
  // decay, then spring to start and twirl
  Animated.decay(position, {
    // coast to a stop
    velocity: {x: gestureState.vx, y: gestureState.vy}, // velocity from gesture release
    deceleration: 0.997,
  }),
  Animated.parallel([
    // after decay, in parallel:
    Animated.spring(position, {
      toValue: {x: 0, y: 0}, // return to start
    }),
    Animated.timing(twirl, {
      // and twirl
      toValue: 360,
    }),
  ]),
]).start(); // start the sequence group

If one **animation is stopped or interrupted**, then all other animations in the group are also stopped. Animated.parallel has a stopTogether option that can be set to false to disable this.

You can find a full list of composition methods in the Composing animations section of the Animated API reference.

## Combining animated values
You can combine two animated values via addition, multiplication, division, or modulo to make a new animated value.

There are some cases where an animated value needs to invert another animated value for calculation. An example is inverting a scale (2x --> 0.5x):

const a = new Animated.Value(1);
const b = Animated.divide(1, a);

Animated.spring(a, {
  toValue: 2,
}).start();

## Animation
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/animation.jpg" width="300px" height="500px" />

<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/multipleAnimate.jpg" width="300px" height="500px" />
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/mutipleAnimation.jpg" width="300px" height="500px" />


## Shadow Animation
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/shadowAnimation.jpg" width="300px" height="500px" />


## FlatList
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/flatList.jpg" width="300px" height="500px" />

## Popular
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/popular.jpeg" width="300px" height="500px" />

## flatList.jpg
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/flatList.jpg" width="300px" height="500px" />

## Local Storage
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/localStorage.jpg" width="300px" height="500px" />
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/localStorage2.jpg"  width="300px" height="500px"/>
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/localStorage3.jpg" width="300px" height="500px" />

## WebView
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/webView.jpg" width="300px" height="500px" />

## Icon
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/icon.jpeg" width="300px" height="500px" />

## Code
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/code.jpeg" width="300px" height="500px" />

## Loader
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/loader.jpeg" width="300px" height="500px" />


## Tutorial
<img src="https://github.com/Awadhesh786/ReactNativeExample/blob/master/screenshot/tutorial.jpeg" width="300px" height="500px" />

