import {Icon} from 'react-native-elements';
import {View, TextInput, TouchableWithoutFeedback} from 'react-native';
import {styles} from './styles';
import Label from '../../atom/Label';
import Button from '../../atom/Button';
import {Color} from './../../../assets/color/Color';
import {useRef, PropsWithChildren, useState} from 'react';
import { useTranslation } from 'react-i18next';
type Props = PropsWithChildren<{
  onSave?: () => void;
  onCancle?: () => void;
  title: (value: string)=>void;
  issue: (value: string)=>void;
}>;
const IssueModaAdd = (props: Props) => {
  const titleRef: any = useRef();
  const issueRef: any = useRef();
  const [title, setTitle] = useState('');
  const [issue, setIssue] = useState('');
  const {t} = useTranslation();
  const handleChangeTitle = (value: string) => {
    setTitle(value);
    props.title(value)
  };
  const handleChangeIssue = (value: string) => {
    setIssue(value);
    props.issue(value);
  };
  const handleBlur = () =>{
    titleRef.current.blur();
    issueRef.current.blur();
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{handleBlur}}>
      <View style={styles.container}>
        <Label content={t('account.feedback.modaladd.addissue')} color={Color.white} size={20} />
        <View style={styles.group}>
          <Label
            style={styles.label}
            content={t('account.feedback.modaladd.issuename')}
            color="white"
          />
          <TextInput
            value={title}
            ref={titleRef}
            placeholder={t('account.feedback.modaladd.entername')}
            placeholderTextColor={Color.whitepink}
            style={{color: Color.white}}
            returnKeyType="next"
            onSubmitEditing={() => issueRef.current.focus()}
            onChangeText={value => handleChangeTitle(value)}
          />
        </View>
        <View style={styles.group}>
          <Label style={styles.label} content={t('account.feedback.modaladd.content')} color="white" />
          <TextInput
            value={issue}
            ref={issueRef}
            placeholder={t('account.feedback.modaladd.entercontent')}
            placeholderTextColor={Color.whitepink}
            style={{color: Color.white}}
            onChangeText={value => handleChangeIssue(value)}
          />
        </View>
        <View style={styles.btnView}>
          <Button
            children={<Icon name="add" type="material" color={'white'} />}
            onPress={props.onSave}
          />
          <Button
            children={<Icon name="x" type="octicon" color={Color.white} />}
            onPress={props.onCancle}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default IssueModaAdd;
