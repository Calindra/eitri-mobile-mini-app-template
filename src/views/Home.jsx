<Window bottomInset backgroundColor="neutral-100" statusBarTextColor="white">
    <View>
        <HeaderComponent />
        <Image width="100%" height="200px" src="https://loremflickr.com/1280/600/brazil" />
        <View paddingHorizontal='small' paddingTop='nano'>
            <Text fontSize='big' fontWeight='bold'>My Eitri-App</Text>
        </View>
        <Text wide paddingHorizontal='small' paddingTop='small' fontSize='small'>A modern way to address scalability and development speed issues.</Text>
        <Text wide paddingHorizontal='small' paddingTop='nano' fontSize='small'>The image above is a random image obtained via HTTP.</Text>
        <Text wide paddingHorizontal='small' paddingTop='nano' fontSize='small'>By pressing the button below, you will make an HTTP request, and the result of this request will be displayed in your terminal.</Text>
        <View paddingHorizontal='small' paddingTop='small'>
            <Button block label="Make Request" onPress={this.makeRequest} />
            <Button block variant="ghost" marginTop="small" label="Make Request" onPress={this.makeRequest} />
        </View>
    </View>
</Window>
