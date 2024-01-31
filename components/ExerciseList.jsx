import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ExerciseList({data}) {
    const router = useRouter();
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item=> item.name}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80, paddingTop: 20}}
        columnWrapperStyle={{
            justifyContent: 'space-around'
        }}
        renderItem={({item, index})=> <ExerciseCard router={router} index={index} item={item} />}
      />
    </View>
  )
}

const ExerciseCard = ({item, router, index})=> {
    return (
        <Animated.View entering={FadeInDown.duration(300).delay(index*200).springify()}>
            <TouchableOpacity onPress={()=> router.push({pathname: '/ejercicioDetalle', params: item})} className="flex space-y-2">
                <Text  
                    style={{fontSize: hp(1.7)}}
                    className="text-neutral-700 tracking-wide font-semibold ml-1"
                >
                    {
                     item.name
                    }
                </Text>
                <View  className="bg-white shadow rounded-[25px]">
                    <Image
                        source={{uri: item.gifUrl}}
                        style={{width: wp(50), height: wp(56)}}
                        contentFit='contain'
                    />
                </View>

                
            </TouchableOpacity>
        </Animated.View>
    )
}