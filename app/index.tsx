import React from 'react'
import {SafeAreaView, Text, TextInput, FlatList, View} from "react-native";
import TodoListSegment from "@/components/TodoListSegment";
import {Todo} from "@/types";


export default function Index() {
    const [data, setData] = React.useState<Todo[]>([]);

    const addNewTask = (title: string) => {
        console.log(title);
        setData(prevData => [...prevData, {title}]);
    };

    return (
        <SafeAreaView className=' flex-1 bg-[#F7F7FD] flex-col'>
            <Text className='text-5xl font-bold mt-5 mx-5'>
                What`s up?
            </Text>

            <TextInput
                placeholder='Add a new task'
                textAlignVertical="center"
                className='mt-5 mx-5 px-4 bg-white rounded-2xl h-16 text-lg leading-[22px] py-0'
                onSubmitEditing={(e) => {
                    if (e.nativeEvent.text.trim() !== "") {
                        addNewTask(e.nativeEvent.text)
                    }
                }}
            />

            <Text className='text-base font-bold mt-10 mx-5 text-[#BABAE1] pl-1'>
                Today`s Tasks
            </Text>

            <FlatList data={data} renderItem={
                ({item}) => (
                    <TodoListSegment todo={item}/>
                )
            }/>
        </SafeAreaView>
    );
}


