import * as React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const styles = StyleSheet.create({
  rootView: { flex: 1 },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  bottomSheetView: { padding: 12 },
});

const ExampleScreen = () => {
  const modalRef = React.useRef(null);
  const [value, setValue] = React.useState("");
  const [outsideModalSheetValue, setOutsideModalSheetValue] =
    React.useState("");

  return (
    <GestureHandlerRootView style={styles.rootView}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <TextInput
            placeholder="Basic example outside Modal Sheet"
            value={outsideModalSheetValue}
            onChangeText={setOutsideModalSheetValue}
            // onChange={(e) => {
            //   setOutsideModalSheetValue(e.target.value);
            // }}
            inputMode="text"
            autoComplete="off"
            importantForAutofill="no"
            keyboardType="default"
          />
          <TouchableOpacity onPress={() => modalRef.current?.present()}>
            <Text>Open</Text>
          </TouchableOpacity>
          <BottomSheetModal ref={modalRef} snapPoints={["80%"]}>
            <BottomSheetView style={styles.bottomSheetView}>
              <TextInput
                placeholder="Example Inside Modal (1>Alpha Keyboard issue)"
                value={value}
                onChangeText={setValue}
                // onChange={(e) => {
                //   setValue(e.target.value);
                // }}
                inputMode="text"
                autoComplete="off"
                importantForAutofill="no"
                keyboardType="default"
              />
            </BottomSheetView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default ExampleScreen;
