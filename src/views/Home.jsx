<Window>
	<View>
    <Illustration height={200} image={require('../assets/images/icon_eitri.svg')}/>
    <Header textAlign="center">Boilerplate Mini App</Header>
    <Spacing size="lg" />
    <ListView items={this.state.links} onItemSelect={this.navigateTo} />
  </View>
</Window>
