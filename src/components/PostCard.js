import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import HTMLRender from 'react-native-htmlview';
import moment from 'moment';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  List,
  Headline,
} from 'react-native-paper';
const PostCard = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('SinglePost', {
          post_id: item.id,
        })
      }>
      <Card
        style={{
          shadowOffset: {width: 5, height: 5},
          width: '90%',
          borderRadius: 12,
          alignSelf: 'center',
          marginBottom: 10,
        }}>
        <Card.Content>
          <Title>{item.title.rendered}</Title>
          <Paragraph>Published on {moment(item.date).fromNow()}</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: item.jetpack_featured_media_url}} />
        <Card.Content>
          <Card.Content>
            <HTMLRender value={item.excerpt.rendered} />
          </Card.Content>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default PostCard;