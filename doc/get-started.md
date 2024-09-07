# Get Started

## Create a new project

[Terminal]
npx @react-native-community/cli@latest init sp0

## Add the project to GitHub

[GitHub]
(Create a new repo "sp0")

[Terminal]
git remote add origin git@github.com:zjkuang/sp0.git
git push -u origin main

## Build and run

### iOS

[Terminal]
bundle install
cd ios && pod install && cd ..

[Xcode]
(Open sp0/ios/sp0.xcworkspace and run)

### Android

[Terminal]
adb reverse tcp:8081 tcp:8081

[Android Studio]
(Open sp0/android, wait for the initial installation being done, run)
