<Window topInset bottomInset backgroundColor="primary-500" statusBarTextColor="white">
    <View>
        {/* 
        Todas as Views precisam ter a tag <Window> como primeira tag, dessa forma eitri saberá o que
        está sendo feito. 
        
        Logo abaixo você está vendo um componente chamado HeaderComponent, na verdade ele é um 
        componente feito dentro deste próprio projeto, na pasta components você pode criar pequenos
        componentes que podem ser reaproveitados nesta aplicação.
    */}
        <HeaderComponent />
        {/* 
        Aqui abaixo você está vendo uma tag de imagem, você pode utilizar require para imagens locais
        do projeto ou pode utilizar um endereço https para onde esteja a imagem.
    */}
        <Image width="100%" height={200} src="https://loremflickr.com/1280/720/abstract" />
        <View paddingHorizontal='small' paddingTop='nano'>
            <Text fontSize='big' color='primary-700' fontWeight='bold'>Meu Eitri-App</Text>
        </View>
        <Text wide paddingHorizontal='small' paddingTop='small' fontSize='small' color='neutral-500'>Uma maneira moderna de solucionar problemas de escalabilidade e velocidade de desenvolvimento.</Text>
        <Text wide paddingHorizontal='small' paddingTop='nano' fontSize='small' color='neutral-500'>A imagem acima é uma imagem aleatória obtida via http.</Text>
        <Text wide paddingHorizontal='small' paddingTop='nano' fontSize='small' color='neutral-500'>Ao apertar o botão abaixo você fará um request HTTP e irá exibir o resultado desse request no log do terminal.</Text>
        <View paddingHorizontal='small' paddingTop='small'>
            {/* O toque no botão está registrado com a função que foi descrita em Home.js */}
            <Button wide label="Realizar request" onPress={this.makeRequest} />
        </View>
    </View>
</Window>
