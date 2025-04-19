import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Todo} from "@/types";


interface TodoListSegmentProps {
    todo: Todo;
}

const TodoListSegment: React.FC<TodoListSegmentProps> = ({todo}) => {
    const [isComplete, setIsComplete] = useState(false);

    const toggleCheck = () => {
        setIsComplete(!isComplete);
    };

    return (
        <View className='flex-row bg-white h-16 mx-5 rounded-2xl  justify-start mt-5'>
            <TouchableOpacity
                onPress={toggleCheck}
                className='mt-5 pl-4'>
                <MaterialCommunityIcons
                    name={isComplete ? 'check-circle' : 'circle-outline'}
                    size={24}
                    color='#2878FF'
                />
            </TouchableOpacity>

            <Text className={`text-base mt-5 pl-3 ${isComplete ? 'line-through' : ''}`}>
                {todo.title}
            </Text>
        </View>
    );
}

export default TodoListSegment;
