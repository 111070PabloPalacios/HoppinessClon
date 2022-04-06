import React, { useState } from "react";
import {
  Alert,
  Modal,
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
//import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  useDrawerStatus,
} from "@react-navigation/drawer";
import { AccountScreen } from "../../account/screen/account.screen";
import { OrderMade } from "./order.component";
import { TouchableOpacity } from "react-native-gesture-handler";
const Drawer = createDrawerNavigator();

export const LogoutMenu = ({openModal, useModalState}) => {
  const [modalVisible, setModalVisible] = useState(true);

  const switchModalState = () => {
    setModalVisible(!modalVisible);
    useModalState(false);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onPres
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          useModalState(false);
        }}
      >
        <>
        <View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={() => switchModalState()}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        </>
      </Modal>
    </View>
  );
};

const Menu = styled.View`
  flex: 1;
  background-color: red;
`;

const styles = StyleSheet.create({
  centeredView: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 0,
    marginRight: 50,
    width: 50,
  },
  modalView: {
    marginTop: 0,
    marginRight: 100,
    backgroundColor: "white",
    borderRadius: 0,
    padding: 10,
    marginLeft: 0,
    height: 1000,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 260,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
});
