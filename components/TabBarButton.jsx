import { View, Platform, StyleSheet } from 'react-native';
import { useLinkBuilder } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export function TabBarButton({ state, descriptors, navigation }) {
  const { buildHref } = useLinkBuilder();
  const icons = {
    index: (props) => <Feather name='home' size={20} {...props} />,
    history: (props) => <MaterialCommunityIcons name='bookshelf' size={20} {...props} />,
    quiz: (props) => <MaterialCommunityIcons name='clipboard-check-outline' size={20} {...props} />,
    profile: (props) => <Feather name='user' size={20} {...props} />
  }

  return (
    <View style={[
      styles.tabbar,
      globalStyles.shadow
    ]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabbaritem,
              { backgroundColor: isFocused ? '#f3e9cd' : 'transparent' }
            ]}
          >
            {
              icons[route.name]({
                color: isFocused ? '#315c50' : '#f3e9cd'
              })
            }
            <Text style={{ color: isFocused ? '#315c50' : '#f3e9cd', fontSize: 12 }}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#315c50',
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 20
  },
  tabbaritem: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 5,
    borderRadius: 16,
    gap: 2
  }
})