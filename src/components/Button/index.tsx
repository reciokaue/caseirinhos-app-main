import React from 'react';

import { Text, View, } from 'react-native';
import { styles } from './styles';

import { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps{
  children: ReactNode
  outlined?: boolean
  redFit?: boolean
  icon?: ReactNode
}

function Button({
  children,
  outlined = false,
  redFit = false,
  icon,
  ...rest
}: ButtonProps) {
  if(outlined){
    return(
      <View  style={styles.border}>
        <RectButton {...rest} activeOpacity={0.35} style={styles.outlined}>
          {icon&& icon}
          <Text style={styles.titleOutlined}>{children}</Text>
        </RectButton>
      </View>
    )
  }if(redFit){
    return(
      <RectButton {...rest} activeOpacity={0.75} style={styles.redFit}>
        <Text style={styles.titleRed}>{children}</Text>
      </RectButton>
    )
  }else{
    return(
      <RectButton {...rest} activeOpacity={0.75} style={styles.container}>
        <Text style={styles.title}>{children}</Text>
      </RectButton>
    )
  }
};

export default Button;
