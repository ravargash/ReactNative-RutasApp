import { View, Text, StyleSheet, Button, Platform } from 'react-native'
import React from 'react'
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions'

export const PermissionsScreen = () => {

  const handleCheckLocationPermission = async () => {

    let permissionStatus: PermissionStatus

      if ( Platform.OS === 'ios'){

        permissionStatus = await request( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE );

      } else {

        permissionStatus = await request( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION );

      }

      console.log({permissionStatus});
      
  }


  return (
    <View style={ localStyle.container }>
      <Text>PermissionsScreen</Text>
      <Button 
        title="Permiso"
        onPress={ handleCheckLocationPermission }
      />
    </View>

  )
}

const localStyle = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})