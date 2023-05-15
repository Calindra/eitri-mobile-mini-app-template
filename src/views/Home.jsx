<Window>
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
    <Image src={require('../assets/images/eitri.jpg')} />
    <View paddingHorizontal='small' paddingTop='nano'>
            <Text fontSize='big' color='primary-700' fontWeight='bold'>Eitri!</Text>
    </View>
    <View paddingHorizontal='small' paddingTop='nano'>
        <Text fontSize='medium' color='neutral-700'>Uma maneira moderna de solucionar problemas de escalabilidade e velocidade de desenvolvimento.</Text>
    </View>
    <View paddingHorizontal='small' paddingTop='small'>
        {/* O toque no botão está registrado com a função que foi descrita em Home.js */}
        <Button label="Aperte-me" onPress={this.makeRequest} />
    </View>
</Window>
