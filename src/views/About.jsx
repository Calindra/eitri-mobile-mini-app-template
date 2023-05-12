<Window>
    <Group>
        <Circle icon={require('../assets/images/icon_eitri.svg')} />
        <Spacing size="sm" />
        <Subtitle fontSize="xs" textAlign="center" color="neutralcolor-darkest">Detalhes desta versão</Subtitle>
        <View>
            <Subtitle textAlign="center" fontSize="xxxs" color="neutralcolor-darkest">Este mini-app foi desenvolvido utilizando as seguintes versões:</Subtitle>
            <Spacing size="sm" />
            <Paragraph textAlign="center">Versão da biblioteca de componentes: ###COMPONENTS_LIBRARY_VERSION_HIGHLIGHTER###</Paragraph>
            <Spacing size="sm" />
            <Paragraph textAlign="center">Versão da API de Super Client: ###SUPER_APP_CLIENT_VERSION_HIGHLIGHTER###</Paragraph>
        </View>
    </Group>
</Window>
