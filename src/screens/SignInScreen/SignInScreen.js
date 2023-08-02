import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from "react-native";
import Logo from "../../../assets/images/logo.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";
//Intregación para creacion de usuario en base de datos AWS
import { API, graphqlOperation } from "aws-amplify";
import { createUser } from "../../graphql/mutations";
import { getUser } from "../../graphql/queries";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = async (data) => {
    //console.log('data', data)
    if (loading) {
      return;
    }
    setLoading(true);
    await Auth.signIn(data.Email, data.Password)
      .then(async (res) => {
        //console.log('data res', res.attributes)
        //Verifico si ya el usuario esta registrado, en caso contrario porcedo a registrar
        await API.graphql(
          graphqlOperation(getUser, { id: res.attributes.sub })
        ).then(async (res1) => {
          if (!res1.data.getUser) {
            const userNew = {
              id: res.attributes.sub,
              name: res.attributes.name,
            };
            //Se crea el usuario automaticamente en la base de datos
            await API.graphql(graphqlOperation(createUser, { input: userNew }))
              .then(() => {
                setLoading(false);
              })
              .catch((error) => {
                console.log("error durante la creacion del usuario", error);
              });
          }
        });

        //navigation.navigate('Mix Balls')
        setLoading(false);
      })
      .catch((error) => {
        let codeRes = error.code;
        setLoading(false);
        switch (codeRes) {
          case "UserNotConfirmedException":
            return Alert.alert(
              "Email unconfirmed",
              "Do you need confirm account to " + data.Email,
              [
                {
                  text: "YES",
                  onPress: async () => {
                    await Auth.resendSignUp(data.Email)
                      .then(() => {
                        navigation.navigate("Confirm Email", data.Email);
                      })
                      .catch((error) => {
                        Alert.alert("Error Confirm Email", error.message);
                      });
                  },
                  style: "default",
                },
                {
                  text: "NO",
                  style: "cancel",
                },
              ]
            );
          default:
            return Alert.alert("Error", error.message);
        }
      });
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("Forgot Password");
  };

  const onSignInGoogle = () => {};

  const onSignInFacebook = () => {};

  const onSignUpPress = () => {
    navigation.navigate("Sign Up");
  };
  return (
    <View style={styles.viewP}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput
          name="Email"
          placeholder="Email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Format email is incorrect",
            },
          }}
        />
        <CustomInput
          name="Password"
          placeholder="Password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be minimun 8 characters long",
            },
            maxLength: {
              value: 8,
              message: "Password should be maximum 8 characters long",
            },
          }}
          secureTextEntry={true}
        />

        <CustomButton
          onPress={handleSubmit(onSignInPressed)}
          text={loading ? "Loading..." : "Sign In"}
        />
        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot Password"
          type="tertiary"
        />
        <CustomButton
          onPress={onSignInGoogle}
          text="Sign In Google"
          backgColor="#FAE9EB"
          foregColor="#DD4D45"
        />
        <CustomButton
          onPress={onSignInFacebook}
          text="Sign In Facebook"
          backgColor="#E7EAF5"
          foregColor="#4765A8"
        />
        <CustomButton
          onPress={onSignUpPress}
          text="Don't have an account? Create one"
          type="tertiary"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewP: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#D5FCFF",
  },
  logo: {
    width: "80%",
    maxWidth: 300,
    maxHeight: 200,
    alignSelf: "center",
  },
});

export default SignInScreen;
