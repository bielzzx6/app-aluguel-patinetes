import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const RideStartScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar barStyle="dark-content" />
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1"
      >
        <View className="flex-1 px-5 py-6">
          {/* Header Image Section */}
          <View className="mb-5 rounded-xl overflow-hidden h-48">
            <Image
              source={require('../../../assets/images/map-image.png')}
              className="absolute inset-0 w-full h-full"
              resizeMode="cover"
            />
            <View className="absolute inset-0 bg-black/30" />
            <View className="flex-1 justify-end p-4">
              <View className="z-10">
                <Text className="text-white text-2xl font-bold mb-1 shadow">
                  Pronto para iniciar?
                </Text>
              </View>
            </View>
          </View>

          {/* Content Card */}
          <View className="bg-white rounded-xl p-5 shadow-sm flex-1">
            {/* Info Section */}
            <View className="mb-6 flex-row items-start">
              <View className="mr-4 mt-1">
                <Ionicons name="bicycle" size={24} color="#2575fc" />
              </View>
              
              <View className="flex-1">
                <Text className="text-lg font-semibold mb-1">
                  Modelo: UrbanGlide Pro
                </Text>
                
                <Text className="text-gray-600 text-base mb-4">
                  ID: XZ45-B789
                </Text>
                
                <View className="flex-row items-start">
                  <View className="mr-3 mt-0.5">
                    <MaterialIcons 
                      name="warning" 
                      size={18} 
                      color="#f59e0b" 
                    />
                  </View>
                  <Text className="text-gray-600 text-sm flex-1 leading-5">
                    A cobrança por minuto começará assim que a corrida iniciar.
                  </Text>
                </View>
              </View>
            </View>

            {/* Divider */}
            <View className="h-px bg-gray-200 my-5" />

            {/* Buttons */}
            <View className="mt-auto space-y-3">
              <TouchableOpacity 
                className="bg-blue-500 rounded-xl py-4 px-4 active:scale-95"
                activeOpacity={0.8}
              >
                <Text className=" text-white text-lg font-semibold text-center">
                  Iniciar Corrida
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                className="border border-gray-300 rounded-xl py-4 px-4 active:scale-95 bg-transparent"
                activeOpacity={0.8}
              >
                <Text className="text-black text-lg font-semibold text-center">
                  Cancelar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RideStartScreen;