import React, { Component } from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import ToolTip from 'react-portal-tooltip';

const StyledButton = styled.a`
    float: right;
    margin: -10px -13px;
    background: #e0e0e0;
    border-radius: 0px 4px 0px 6px;
    border: 2px solid #cacaca;
    border-top: 0;
    border-right: 0;
    cursor: pointer;

    & i {
        color: #404040;
        padding: 10px 13px;
    }
`;

const toolTipBodyStyle = {
    style: {
        backgroundColor: '#222',
        color: '#eee',
        textAlign: 'center',
        padding: '7px 10px',
        fontSize: '11px',
        borderRadius: '6px',
        boxShadow: 'none',
    },
    arrowStyle: {
        color: '#222',
    },
};

export default class Copy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTooltipActive: false,
            copied: false,
        };
    }

    onCopy() {
        this.setState({ copied: true });
    }

    showTooltip() {
        this.setState({ isTooltipActive: true });
    }

    hideTooltip() {
        this.setState({ isTooltipActive: false });
    }

    render() {
        const tipText = this.state.copied ? 'Copied!' : 'Copy';

        return (
            <StyledButton data-tip={tipText} data-place="top" data-effect="solid" data-for="copyToClipboard">
                <CopyToClipboard
                    text={this.props.output}
                    onCopy={() => {
                        this.onCopy();
                    }}
                >
                    <i
                        id="copyToClipboard"
                        aria-hidden="true"
                        onMouseEnter={() => {
                            this.showTooltip();
                        }}
                        onMouseLeave={() => {
                            this.hideTooltip();
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="45" viewBox="0 0 448 512">
                            <path
                                fill="currentColor"
                                d="m433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
                            />
                        </svg>
                    </i>
                </CopyToClipboard>
                <ToolTip
                    active={this.state.isTooltipActive}
                    position="top"
                    arrow="center"
                    parent="#copyToClipboard"
                    tooltipTimeout={0}
                    style={toolTipBodyStyle}
                >
                    {tipText}
                </ToolTip>
            </StyledButton>
        );
    }
}
