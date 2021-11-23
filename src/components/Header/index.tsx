import React from 'react';

import { Text, View } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../theme';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

interface HeaderProps {
  title?: string
  border?: boolean
}

function Header({title, border = false}: HeaderProps) {
  const navigation = useNavigation()

  return (
    <View style={[styles.container, border && styles.border]}>
      <View style={styles.buttonWrapper}>
        <RectButton onPress={() => navigation.goBack()} style={styles.button}>
          <Feather name="chevron-left" size={32} color={theme.colors.text} />
        </RectButton>
      </View>
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

export default Header;
