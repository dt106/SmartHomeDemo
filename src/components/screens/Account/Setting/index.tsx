import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Header from '../../../organism/Header'
import Label from '../../../atom/Label'
import { Color } from '../../../../assets/color/Color'
import Switch from '../../../atom/Switch'
import i18n from '../../../../languages/i18next'
import { useTranslation } from 'react-i18next'
export default function Setting() {
  const lan = i18n.language === 'vi'
  const [value, setValue] = useState(lan);
  const {t} = useTranslation();
  const handleChange = (value: boolean) => {
    i18n.changeLanguage(value?'en':'vi');
  }
  return (
    <View style = {styles.container}>
      <Header title={t('account.setting.setting')}/>
      <View style = {styles.main}>
        <View style= {styles.item}>
          <Label content= {t('account.setting.language')} color={Color.yellow} size={16}/>
          <Switch valueChange={(value)=>handleChange(value)} value = {!value} textActive='EN' textInActive='VI'/>
        </View>
      </View>
    </View>
  )
}

