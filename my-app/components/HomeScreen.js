import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const featuredJobs = [
  {
    id: 1,
    title: 'Software Engineering',
    company: 'Facebook',
    salary: '$180,000',
    location: 'Accra, Ghana',
    image: require('../assets/three.png'),
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Google',
    salary: '$200,000',
    location: 'Francisco, USA',
    image: require('../assets/two.png'),
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'Microsoft',
    salary: '$150,000',
    location: 'Seattle, USA',
    image: require('../assets/two.png'),
  },
  {
    id: 4,
    title: 'UX Designer',
    company: 'Adobe',
    salary: '$120,000',
    location: 'San Jose, USA',
    image: require('../assets/two.png'),
  },
  {
    id: 5,
    title: 'Backend Developer',
    company: 'Amazon',
    salary: '$130,000',
    location: 'Seattle, USA',
    image: require('../assets/two.png'),
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    company: 'Netflix',
    salary: '$140,000',
    location: 'Los Gatos, USA',
    image: require('../assets/two.png'),
  },
  {
    id: 7,
    title: 'Full Stack Developer',
    company: 'Airbnb',
    salary: '$160,000',
    location: 'San Francisco, USA',
    image: require('../assets/two.png'),
  },
  {
    id: 8,
    title: 'AI Engineer',
    company: 'Tesla',
    salary: '$170,000',
    location: 'Palo Alto, USA',
    image: require('../assets/two.png'),
  },
];

const popularJobs = [
  {
    id: 1,
    title: 'Jr Executive',
    company: 'Burger King',
    salary: '$96,000/y',
    location: 'Los Angeles, US',
    image: require('../assets/one.png'),
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Beats',
    salary: '$84,000/y',
    location: 'Florida, US',
    image: require('../assets/two.png'),
  },
  {
    id: 3,
    title: 'Product Manager',
    company: 'Facebook',
    salary: '$86,000/y',
    location: 'Florida, US',
    image: require('../assets/three.png'),
  },
  // Add more popular job objects as needed
];

const JobCard = ({ job, isFeatured }) => (
  <View style={[styles.jobContainer, isFeatured && styles.featuredJobContainer]}>
    <View style={styles.jobContent}>
      <View style={styles.jobDetailsTop}>
        <View style={styles.jobImageBackground}>
          <Image source={job.image} style={styles.jobImage} />
        </View>
        <View style={styles.jobTextContainer}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.companyName}>{job.company}</Text>
        </View>
      </View>
      <View style={styles.jobDetailsBottom}>
        <Text style={styles.salary}>{job.salary}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>
    </View>
  </View>
);

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image source={require('../assets/p.jpeg')} style={styles.image} />
      </View>

      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search a job or position"
            placeholderTextColor="#666"
          />
        </View>
        <Image source={require('../assets/four.png')} style={styles.searchImage} />
      </View>

      <ScrollView>
        <View style={styles.featuredJoContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Jobs</Text>
            <Text style={styles.sectionLink}>See all</Text>
          </View>
          <FlatList
            data={featuredJobs}
            renderItem={({ item }) => <JobCard job={item} isFeatured />}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalList}
          />
        </View>

        <View style={styles.popularJobsContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Jobs</Text>
            <Text style={styles.sectionLink}>See all</Text>
          </View>
          <FlatList
            data={popularJobs}
            renderItem={({ item }) => <JobCard job={item} />}
            keyExtractor={item => item.id.toString()}
            style={[styles.verticalList, styles.popularJobsBackground]}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  searchImage: {
    width: 30,
    height: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionLink: {
    fontSize: 14,
    color: '#007acc',
  },
  horizontalList: {
    marginBottom: 20,
  },
  verticalList: {
    marginBottom: 20,
  },
  jobContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  featuredJobContainer: {
    height: 120,  // Increased height for featured jobs
    backgroundColor:'#007acc'
  },
  jobContent: {
    flexDirection: 'column',
  },
  jobDetailsTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  jobDetailsBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  jobTextContainer: {
    marginLeft: 10,
  },
  jobImageBackground: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobImage: {
    width: 30,
    height: 30,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  companyName: {
    fontSize: 12,
    color: 'black',
    opacity:0.5
  },
  salary: {
    fontSize: 14,
    color: 'black',
  },
  location: {
    fontSize: 14,
    color: 'black',
  },
  popularJobsBackground: {
    backgroundColor: 'rgba(240, 240, 240, 0.7)', // Background color for popular jobs
    borderRadius: 10,
    padding: 10,
  },
});

export default HomeScreen;
