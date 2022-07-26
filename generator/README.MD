# AEM Component Generator

AEM Component Generator is a java project that enables developers to generate the base structure of an
AEM component using a JSON configuration file specifying component and dialog properties and other configuration
options.

## Dependencies

The AEM Component Generator **code has dependencies on ACS AEM Commons version 4.2.0+**.

ACS AEM Commons is already bundled in this project.

## How To Use

For more information on how to use the AEM Component Generator, please see the [AEM Component Generator Github page](https://github.com/adobe/aem-component-generator/blob/master/README.md).

To generate a component, navigate to the main folder of your AEM project and execute the following command.

```sh
$ java -jar <jarfile> <configfile>
```

Codigo de build:
mvn clean install -PautoInstallSinglePackage

Passo 1: Criar o arquivo .json do componente na pasta "/generator".
Passo 2: No terminal, executar:
cd generator
java -jar cmp-generator.jar NomedoArquivo.json
Passo 3: Apagar o arquivo html(htl) gerado na ui.apps
