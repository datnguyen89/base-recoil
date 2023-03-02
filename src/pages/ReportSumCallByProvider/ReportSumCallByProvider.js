import React, { useEffect, useRef, useState } from 'react'
import {ReportSumCallByProviderWrapper} from './ReportSumCallByProviderStyled'
import {useNavigate} from 'react-router-dom'
import {useQuery} from '../../hooks/useQuery'
import {Helmet} from 'react-helmet/es/Helmet'
import dateUtils from '../../utils/dateUtils'
import PaginationRow from '../../components/PaginationRow'
import {Button, Col, Divider, Dropdown, Form, notification, Row, Space, Table, DatePicker, Checkbox, Menu} from 'antd'
import {ERROR_COLOR, ERROR_TITLE, SHORT_DATE, STRING_DATE,} from '../../utils/constant'
import numberUtils from '../../utils/numberUtils'
import {ColorText, RowCenterDiv, RowSpaceBetweenDiv, DropdownShowColumnWrapper} from '../../components/CommonStyled/CommonStyled'
import DebounceSelect from '../../components/DebounceSelect/DebounceSelect'
import {DownOutlined, EyeOutlined, SearchOutlined, FilePdfOutlined} from '@ant-design/icons'
import validator from '../../validator'

//
// const ReportSumCallByProvider = props => {

//     return (
//         <>
//           <Helmet>
//             <title>Báo cáo sao kê</title>
//           </Helmet>
//           <ReportSumCallByProviderWrapper>
//             <div>
//               <Form
//                   form={formReportFilter}
//                   colon={false}
//                   onFinish={onFinish}
//                   labelCol={{span: 6}}
//                   wrapperCol={{span: 18}}
//                   labelAlign={'left'}
//               >
//                 <Row justify={'center'} gutter={[32, 16]}>
//                   <Col xxl={8} xl={10} lg={10} md={24} sm={24} xs={24}>
//                     <Form.Item
//                         rules={[
//                           {validator: validator.validateRangePickerExport},
//                         ]}
//                         label={'Thời gian'}
//                         name={'rangePicker'}
//                     >
//                       <RangePicker
//                           placeholder={['Từ ngày', 'Đến ngày']}
//                           allowClear={false}
//                           format={SHORT_DATE}
//                           style={{width: '100%'}}/>
//                     </Form.Item>
//                   </Col>
//                   <Col xxl={8} xl={10} lg={10} md={24} sm={24} xs={24}>
//                     <Form.Item
//                         label={'Tài khoản'}
//                         name={'accountName'}
//                     >
//                       {/*<Select*/}
//                       {/*  label={'Tài khoản'}*/}
//                       {/*  name={'accountName'}*/}
//                       {/*  showSearch*/}
//                       {/*  optionFilterProp={'name'}*/}
//                       {/*  placeholder={'Tài khoản'}>*/}
//                       {/*  {*/}
//                       {/*    listAccountsByMemberID && listAccountsByMemberID?.length > 0 && listAccountsByMemberID.map((item, index) =>*/}
//                       {/*      <Select.Option*/}
//                       {/*        key={index}*/}
//                       {/*        value={item.AccountName}*/}
//                       {/*        name={item.AccountName}>*/}
//                       {/*        {item.AccountName}*/}
//                       {/*      </Select.Option>,*/}
//                       {/*    )*/}
//                       {/*  }*/}
//                       {/*</Select>*/}
//
//                       {/*<DebounceSelect*/}
//                       {/*    showSearch={true}*/}
//                       {/*    value={value}*/}
//                       {/*    placeholder='Tài khoản'*/}
//                       {/*    initOption={[]}*/}
//                       {/*    fetchOptions={fetchUserList}*/}
//                       {/*    onChange={(newValue) => {*/}
//                       {/*      setValue(newValue)*/}
//                       {/*    }}*/}
//                       {/*    style={{*/}
//                       {/*      width: '100%',*/}
//                       {/*    }}*/}
//                       {/*/>*/}
//                     </Form.Item>
//
//                   </Col>
//                   <Col xxl={2} xl={4} lg={4} md={24} sm={24} xs={24}>
//                     <Button type={'primary'} htmlType={'submit'} block>
//                       <SearchOutlined/>
//                       Tra cứu
//                     </Button>
//                   </Col>
//                 </Row>
//               </Form>
//
//               <Divider/>
//
//               <RowSpaceBetweenDiv margin={'16px 0'}>
//                 <Dropdown
//                     overlay={overlayShowColumn}
//                     trigger={['click']}>
//                   <Button>
//                     <EyeOutlined/> Ẩn hiện cột
//                   </Button>
//                 </Dropdown>
//                 {
//                     debitBalanceOpen !== null &&
//                     <ColorText
//                         fontWeight={600}
//                     >
//                       {`Số dư đầu kỳ    ${numberUtils.thousandSeparator(debitBalanceOpen)} (VND)`}
//                     </ColorText>
//                 }
//                 <Dropdown
//                     overlayClassName={'overlay-export-statement'}
//                     overlay={overlayGroupButton}
//                     placement='bottomRight'>
//                   <Button style={{minWidth: 130}}>
//                     <Space>
//                       Xuất dữ liệu
//                       <DownOutlined/>
//                     </Space>
//                   </Button>
//                 </Dropdown>
//               </RowSpaceBetweenDiv>
//               <Table
//                   scroll={{x: 1200}}
//                   bordered={true}
//                   dataSource={listBillingReportsStatement}
//                   columns={columns}
//                   rowKey={record => record?.STT || 0}
//                   pagination={false}/>
//               {
//                   debitBalance !== null &&
//                   <RowCenterDiv>
//                     <ColorText
//                         padding={'16px 0 0 0'}
//                         fontWeight={600}
//                     >
//                       {`Số dư cuối kỳ    ${numberUtils.thousandSeparator(debitBalance)} (VND)`}
//                     </ColorText>
//                   </RowCenterDiv>
//               }
//
//               <PaginationRow
//                   onChangePagination={handleChangePagination}
//                   currentListLength={listBillingReportsStatement?.length - 1}
//                   totalCount={totalCountStatement - 1}
//                   pageIndex={objFilterStatement.PageIndex}
//                   pageSize={objFilterStatement.PageSize}
//                   pageSizeOptions={[50, 100, 150, 200]}
//               />
//             </div>
//           </ReportSumCallByProviderWrapper>
//         </>
//     )
//   }
// }

const { RangePicker } = DatePicker


const ReportSumCallByProvider = props => {
    // region props, hook, state =================

    const query = useQuery()
    const navigate = useNavigate()
    const [formReportFilter] = Form.useForm()

    const [showColumn, setShowColumn] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const dropdownShowColumn = [
        {
            id: 1,
            title: 'STT',
        },
        {
            id: 2,
            title: 'Mã giao dịch',
        },
        {
            id: 3,
            title: 'Ngày giao dịch',
        },
        {
            id: 4,
            title: 'Nội dung',
        },
        {
            id: 5,
            title: 'Từ/Đến',
        },
        {
            id: 6,
            title: 'Ghi nợ',
        },
        {
            id: 7,
            title: 'Ghi có',
        },
        {
            id: 8,
            title: 'Số dư',
        },
        {
            id: 9,
            title: 'Thao tác',
        },
    ]
    // endregion

    // region destructuring ======================
    // endregion

    // region variable ===========================
    const columns = [
        {
            id: 1,
            title: 'STT',
            width: 55,
            align: 'center',
            render: (record) => record?.STT > 0 ? record?.STT : '',
        },
        {
            id: 2,
            title: 'Mã giao dịch',
            render: record => record?.STT > 0 ? record?.TransactionID : '',
        },
        {
            id: 3,
            title: 'Ngày giao dịch',
            render: record => record?.STT > 0 ? dateUtils.convertToStrDate(record?.TransTime) : '',
        },
        {
            id: 4,
            title: 'Nội dung',
            render: record => record?.STT > 0 ? record?.Description : <strong>Tổng cộng</strong>,
        },
        {
            id: 5,
            title: 'Từ/Đến',
            render: record => record?.RelatedAccount,
        },
        {
            id: 6,
            width: 120,
            align: 'right',
            title: <RowCenterDiv>Ghi nợ</RowCenterDiv>,
            render: record => record?.STT > 0
                ? numberUtils.thousandSeparator(record?.ExpenseAmount)
                : <strong>{numberUtils.thousandSeparator(record?.ExpenseAmount)}</strong>,
        },
        {
            id: 7,
            width: 120,
            align: 'right',
            title: <RowCenterDiv>Ghi có</RowCenterDiv>,
            render: record => record?.STT > 0
                ? numberUtils.thousandSeparator(record?.InComeAmount)
                : <strong>{numberUtils.thousandSeparator(record?.InComeAmount)}</strong>,
        },
        {
            id: 8,
            width: 150,
            align: 'right',
            title: <RowCenterDiv>Số dư</RowCenterDiv>,
            render: record => record?.STT > 0
                ? numberUtils.thousandSeparator(record?.CloseBalance)
                : '',
        },
        {
            id: 9,
            width: 90,
            align: 'center',
            title: 'Thao tác',
            render: record => record?.STT > 0 &&
                <Space size={16}>
                    {/*<Tooltip title={''}>*/}
                    {/*  <FileFilled*/}
                    {/*    style={{*/}
                    {/*      color: appTheme.solidColor,*/}
                    {/*      cursor: 'pointer',*/}
                    {/*    }}*/}
                    {/*  />*/}
                    {/*</Tooltip>*/}
                    {/*<PrintStatementPdfModal*/}
                    {/*    button={*/}
                    {/*      <PrinterFilled*/}
                    {/*          style={{*/}
                    {/*            color: appTheme.solidColor,*/}
                    {/*            cursor: 'pointer',*/}
                    {/*          }}*/}
                    {/*      />*/}
                    {/*    }*/}
                    {/*    record={{ ...record, userFullName: currUserName, accountFullName }}*/}
                    {/*/>*/}
                </Space>,
        },
    ].filter(item => showColumn.includes(item.id))
    // endregion

    // region function handle logic ==============
    const handleMenuClickExport = (e) => {
        let accountName = formReportFilter.getFieldValue('accountName')?.value

        if (!accountName?.trim()) {
            notification.error({
                message: <ColorText fontSize={'20px'} color={ERROR_COLOR}>{ERROR_TITLE}</ColorText>,
                description: 'Vui lòng nhập mã khách hàng',
            })
            return
        }
    }
        const onFinish = (e) => {
            let accountName = e.accountName?.value?.trim()
            if (!accountName) {
                notification.error({
                    message: <ColorText fontSize={'20px'} color={ERROR_COLOR}>{ERROR_TITLE}</ColorText>,
                    description: 'Chọn số tài khoản muốn xem sao kê',
                })
                return
            }
            objFilterStatement.PageIndex = 1
            objFilterStatement.AccountName = accountName
            objFilterStatement.Fromdate = e.rangePicker[0].format(STRING_DATE)
            objFilterStatement.Todate = e.rangePicker[1].format(STRING_DATE)
            // reportStore.getStatementReport()
        }
        const handleChangePagination = (pageIndex, pageSize) => {
            if (objFilterStatement.PageSize !== pageSize) {
                objFilterStatement.PageIndex = 1
                objFilterStatement.PageSize = pageSize
            } else {
                objFilterStatement.PageIndex = pageIndex
            }
            // reportStore.getStatementReport()
        }
        // endregion

        // region function render ====================
        const onChangeShowColumn = (e) => {
            setShowColumn(e)
        }
        const overlayShowColumn = (
            <DropdownShowColumnWrapper>
                <Checkbox.Group
                    value={showColumn}
                    style={{width: '100%'}}
                    onChange={onChangeShowColumn}>
                    <Row gutter={[8, 8]}>
                        {
                            dropdownShowColumn.map(item =>
                                <Col key={item.id} span={24}>
                                    <Checkbox value={item.id}>{item.title}</Checkbox>
                                </Col>,
                            )
                        }
                    </Row>
                </Checkbox.Group>
            </DropdownShowColumnWrapper>
        )
        const overlayGroupButton = (
            <Menu
                onClick={handleMenuClickExport}
                items={[
                    {
                        label: 'Xuất file pdf',
                        key: 'exportPdf',
                        icon: <FilePdfOutlined/>,
                    },
                    {
                        type: 'divider',
                    },
                    {
                        label: 'Xuất file excel',
                        key: 'exportExcel',
                        // icon: <LoadingOutlined/> : <FileExcelOutlined/>,
                        // disabled: exportStatementLoading,
                    },
                    // {
                    //   type: 'divider',
                    // },
                    // {
                    //   label: 'In báo cáo',
                    //   key: '3',
                    //   icon: <PrinterOutlined />,
                    // },
                ]}
            />
        )
        // endregion

        // region side effect ========================

        // endregion
    return (
        <>
            <Helmet>
                <title>Báo cáo sao kê</title>
            </Helmet>
            <ReportSumCallByProviderWrapper>
                <div>
                    <Form
                        form={formReportFilter}
                        colon={false}
                        onFinish={onFinish}
                        labelCol={{span: 6}}
                        wrapperCol={{span: 18}}
                        labelAlign={'left'}
                    >
                        <Row justify={'center'} gutter={[32, 16]}>
                            <Col xxl={8} xl={10} lg={10} md={24} sm={24} xs={24}>
                                <Form.Item
                                    rules={[
                                        {validator: validator.validateRangePickerExport},
                                    ]}
                                    label={'Thời gian'}
                                    name={'rangePicker'}
                                >
                                    <RangePicker
                                        placeholder={['Từ ngày', 'Đến ngày']}
                                        allowClear={false}
                                        format={SHORT_DATE}
                                        style={{width: '100%'}}/>
                                </Form.Item>
                            </Col>
                            <Col xxl={8} xl={10} lg={10} md={24} sm={24} xs={24}>
                                <Form.Item
                                    label={'Tài khoản'}
                                    name={'accountName'}
                                >
                                    {/*<Select*/}
                                    {/*  label={'Tài khoản'}*/}
                                    {/*  name={'accountName'}*/}
                                    {/*  showSearch*/}
                                    {/*  optionFilterProp={'name'}*/}
                                    {/*  placeholder={'Tài khoản'}>*/}
                                    {/*  {*/}
                                    {/*    listAccountsByMemberID && listAccountsByMemberID?.length > 0 && listAccountsByMemberID.map((item, index) =>*/}
                                    {/*      <Select.Option*/}
                                    {/*        key={index}*/}
                                    {/*        value={item.AccountName}*/}
                                    {/*        name={item.AccountName}>*/}
                                    {/*        {item.AccountName}*/}
                                    {/*      </Select.Option>,*/}
                                    {/*    )*/}
                                    {/*  }*/}
                                    {/*</Select>*/}

                                    {/*<DebounceSelect*/}
                                    {/*    showSearch={true}*/}
                                    {/*    value={value}*/}
                                    {/*    placeholder='Tài khoản'*/}
                                    {/*    initOption={[]}*/}
                                    {/*    fetchOptions={fetchUserList}*/}
                                    {/*    onChange={(newValue) => {*/}
                                    {/*      setValue(newValue)*/}
                                    {/*    }}*/}
                                    {/*    style={{*/}
                                    {/*      width: '100%',*/}
                                    {/*    }}*/}
                                    {/*/>*/}
                                </Form.Item>

                            </Col>
                            <Col xxl={2} xl={4} lg={4} md={24} sm={24} xs={24}>
                                <Button type={'primary'} htmlType={'submit'} block>
                                    <SearchOutlined/>
                                    Tra cứu
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                    <Divider/>

                    <RowSpaceBetweenDiv margin={'16px 0'}>
                        <Dropdown
                            overlay={overlayShowColumn}
                            trigger={['click']}>
                            <Button>
                                <EyeOutlined/> Ẩn hiện cột
                            </Button>
                        </Dropdown>
                        {/*{*/}
                        {/*    debitBalanceOpen !== null &&*/}
                        {/*    <ColorText*/}
                        {/*        fontWeight={600}*/}
                        {/*    >*/}
                        {/*        {`Số dư đầu kỳ    ${numberUtils.thousandSeparator(debitBalanceOpen)} (VND)`}*/}
                        {/*    </ColorText>*/}
                        {/*}*/}
                        <Dropdown
                            overlayClassName={'overlay-export-statement'}
                            overlay={overlayGroupButton}
                            placement='bottomRight'>
                            <Button style={{minWidth: 130}}>
                                <Space>
                                    Xuất dữ liệu
                                    <DownOutlined/>
                                </Space>
                            </Button>
                        </Dropdown>
                    </RowSpaceBetweenDiv>
                    <Table
                        scroll={{x: 1200}}
                        bordered={true}
                        dataSource={[]}
                        columns={columns}
                        rowKey={record => record?.STT || 0}
                        pagination={false}/>
                    {/*{*/}
                    {/*    debitBalance !== null &&*/}
                    {/*    <RowCenterDiv>*/}
                    {/*        <ColorText*/}
                    {/*            padding={'16px 0 0 0'}*/}
                    {/*            fontWeight={600}*/}
                    {/*        >*/}
                    {/*            {`Số dư cuối kỳ    ${numberUtils.thousandSeparator(debitBalance)} (VND)`}*/}
                    {/*        </ColorText>*/}
                    {/*    </RowCenterDiv>*/}
                    {/*}*/}

                    <PaginationRow
                        onChangePagination={handleChangePagination}
                        currentListLength={10 - 1}
                        totalCount={10 - 1}
                        pageIndex={1}
                        pageSize={100}
                        pageSizeOptions={[50, 100, 150, 200]}
                    />
                </div>
            </ReportSumCallByProviderWrapper>
        </>
    );
}

ReportSumCallByProvider.propTypes = {

};

export default ReportSumCallByProvider;