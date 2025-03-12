import { View, Text, ActivityIndicator, ScrollView, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import useFetch from '@/services/usefetch';
import { fetchMovies } from '@/services/api';
import { getTrendingMovies } from '@/services/appwrite';

import { icons } from '@/constants/icons';
import { images } from '@/constants/images';

import SearchBar from '@/components/SearchBar';
import MovieCard from '@/components/MovieCard';
import TrendingCard from '@/components/TrendingCard';

const Home = () => {
  const router = useRouter();

  const { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() => fetchMovies({ query: '' }));

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 10,
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        {moviesLoading ? (
          <ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center" />
        ) : moviesError ? (
          <Text className="text-white text-center mt-10">{moviesError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar onPress={() => router.push('/search')} placeholder="Search for a movie" />

            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>

              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: 'flex-start', gap: 20, paddingRight: 5, marginBottom: 10 }}
                scrollEnabled={false}
              ></FlatList>
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
