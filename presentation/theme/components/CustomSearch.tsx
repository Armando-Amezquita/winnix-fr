import { Colors } from "@/presentation/styles/global-styles";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { Animated, Keyboard, StyleSheet, Text, TextInput, TextStyle, TouchableWithoutFeedback, View } from "react-native";

interface CustomSearchProps {
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
  iconLeft?: keyof typeof Ionicons.glyphMap;
  iconRight?: keyof typeof Ionicons.glyphMap;
  styleLabel?: TextStyle;
  errorMessage?: string;
}

export const CustomSearch = ({ name, control, label, placeholder = "Buscar...", iconLeft, iconRight, styleLabel, errorMessage }: CustomSearchProps) => {
  const [isActive, setIsActive] = useState(false);

  const shadowAnim = useRef(new Animated.Value(0)).current;

  const animatedStyle = {
    shadowOpacity: shadowAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.4],
    }),
    shadowRadius: shadowAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 6],
    }),
    elevation: shadowAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 6],
    }),
  };

  useEffect(() => {
    Animated.timing(shadowAnim, {
      toValue: isActive ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [isActive]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {label && <Text style={[styles.label, styleLabel]}>{label}</Text>}

        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <Animated.View
              style={[
                styles.inputContainer,
                {
                  borderColor: Colors.secondary,
                  shadowColor: Colors.secondary,
                },
                animatedStyle,
              ]}>
              {iconLeft && <Ionicons name={iconLeft} size={22} color={Colors.secondary} style={{ marginRight: 6 }} />}
              <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={Colors.gray}
                value={value}
                onChangeText={onChange}
                onFocus={() => setIsActive(true)}
                onBlur={() => {
                  setIsActive(false);
                  onBlur();
                }}
              />
              {iconRight && <Ionicons name={iconRight} size={22} color={Colors.secondary} />}
            </Animated.View>
          )}
        />

        {errorMessage && <Text style={{ color: Colors.error, marginTop: 4, fontSize: 12 }}>{errorMessage}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 8,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: Colors.dark,
    shadowOffset: { width: 0, height: 6 },
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 50,
    paddingHorizontal: 8,
    color: Colors.light,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: "600",
    color: Colors.light,
  },
});
