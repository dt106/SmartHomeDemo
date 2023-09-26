import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Header from '../../../organism/Header'
import Label from '../../../atom/Label'
import { arrInfo } from '../../../../data/arrayInfo'
import { Color } from '../../../../assets/color/Color'
import { useTranslation } from 'react-i18next'


export default function Profile() {
  const {t} = useTranslation();
  return (
    <View style = {styles.container}>
      <Header title={t('account.profile.title')}/>
      <View style = {styles.group}>
        {
          arrInfo.map((doc: any, index: number)=>(
            <View key={index} style = {styles.item}>
              <Label content={t(`account.profile.${doc}`)} color={Color.yellow}/>
              <Text style = {styles.info}>{doc.title}</Text>
            </View>
          ))
        }
      </View>
    </View>
  )
}

