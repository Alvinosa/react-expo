import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Selamat Datang!</Text>
      </View>

      {/* Promo Section */}
      <View style={styles.promoContainer}>
        <Image
          source={{ uri: 'https://pin.it/5sqevJw4h' }}  // Gambar produk kecantikan
          style={styles.promoImage}
        />
        <Text style={styles.promoText}>Diskon Spesial! Jangan Lewatkan.</Text>
      </View>

      {/* Menu Section */}
      <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}>Apa yang ingin Anda lakukan hari ini?</Text>
        <View style={styles.menuItems}>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome5 name="brush" size={40} color="#FF69B4" />
            <Text style={styles.menuItemText}>Pesan Layanan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome5 name="gift" size={40} color="#FF69B4" />
            <Text style={styles.menuItemText}>Promo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome5 name="heart" size={40} color="#FF69B4" />
            <Text style={styles.menuItemText}>Favorit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Nikmati Layanan Kami</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Lihat Layanan Lainnya</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF69B4',
    textAlign: 'center',
  },
  promoContainer: {
    backgroundColor: '#FFB6C1',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  promoImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  promoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: 16,
  },
  menuItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#FFE6F0',
    shadowColor: '#FF69B4',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  menuItemText: {
    fontSize: 14,
    color: '#FF69B4',
    marginTop: 8,
  },
  footer: {
    alignItems: 'center',
    marginTop: 40,
  },
  footerText: {
    fontSize: 18,
    color: '#FF69B4',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#FF69B4',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#FF69B4',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
